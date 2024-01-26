import { MainnetHardfork, getMainnetHardforksFrom } from '@/chains/mainnet/hardforks';
import {
  OpcodeGroup,
  ethSpecsOpcodeSrc,
  evmCodesOpcodesLink,
  evmCodesPlaygroundLink,
} from '@/lib/opcodes';
import { Opcode } from '@/types';

export const callcode: Omit<Opcode, 'examples'> = {
  number: 0xf2,
  name: 'callcode',
  description: "	Message-call into this account with alternative account's code",
  minGas: 100,
  gasComputation: {
    staticGasCost: {
      expression: '0',
    },
    dynamicGasCost: {
      expression:
        'memory_expansion_cost + code_execution_cost + address_access_cost + positive_value_cost',
      variables: [
        {
          name: 'memory_expansion_cost',
          description:
            'During a smart contract execution, memory can be accessed with opcodes. When an offset is first accessed (either read or write), memory may trigger an expansion, which costs gas. Memory expansion may be triggered when the byte offset (modulo 32) accessed is bigger than previous offsets. If a larger offset trigger of memory expansion occurs, the cost of accessing the higher offset is computed and removed from the total gas available at the current call context. Thus, only the additional bytes of memory must be paid for.',
          expression: 'memory_expansion_cost = new_memory_cost - last_memory_cost',
          variables: [
            {
              name: 'memory_cost',
              description: 'The memory cost function for a given machine state',
              expression: '(memory_size_word ** 2) / 512 + (3 * memory_size_word)',
            },
            {
              name: 'memory_size_word',
              description:
                'Number of (32-byte) words required for memory after the operation in question',
              expression: '(memory_byte_size + 31) / 32',
            },
            {
              name: 'memory_byte_size',
              description:
                'The highest referenced memory address after the operation in question (in bytes)',
            },
          ],
        },
        {
          name: 'code_execution_cost',
          description: 'The cost of the called code execution (limited by the gas parameter)',
        },
        {
          name: 'address_access_cost',
          description: '100 if the accessed address is warm, 2600 otherwise',
        },
        {
          name: 'positive_value_cost',
          description:
            '9000 if `value` is not 0. In this case there is also a call stipend that is given to make sure that a basic fallback function can be called. 2300 is thus removed from the cost, and also added to the gas input.',
        },
      ],
    },
  },
  inputs: [
    {
      name: 'gas',
      description:
        'The amount of gas to send to the sub context to execute. The gas that is not used by the sub context is returned to this one.',
    },
    {
      name: 'address',
      description: 'The account which context to execute',
    },
    {
      name: 'value',
      description: 'The value in wei to send to the account',
    },
    {
      name: 'argsOffset',
      description: 'The byte offset in the memory in bytes, the calldata of the sub context',
    },
    {
      name: 'argsSize',
      description: 'The byte size to copy (size of the calldata)',
    },
    {
      name: 'retOffset',
      description:
        'The byte offset in the memory in bytes, where to store the return data of the sub context',
    },
    {
      name: 'retSize',
      description: 'The byte size to copy (size of the return data)',
    },
  ],
  outputs: [
    {
      name: 'success',
      description: 'Returns 0 if the sub context reverted, 1 otherwise',
    },
  ],
  // TODO: Add an example when one will be provided on https://www.evm.codes/#f2?fork=shanghai
  playgroundLink: evmCodesPlaygroundLink(
    '%27kCreatXa%20VvthavcreateNaWexceptioWif%20Zofjisb_17bx67Y054Y757FE5BY052Y86018F3JMSTORE~17~15JCREATzm0dddQ6qyykSevZiWthXcurrenvVt~1JSSTORz%27%3Am1dd~32Q7q%27~_1%20zEyykCall%20withjK0%20y%5Cnvt%20q_2bxFFFFyCALLCODEm%3Db%2C%20returnNk%2F%2F%20j%20storagXd~0b%200_yPUSHZfirsvKY600Xe%20Wn%20VcontracQdJDUPNs%20KslovJdy%01JKNQVWXYZ_bdjkmqvyz~_'
  ),
  errorCases: ['Not enough gas', 'Not enough values on the stack'],
  notes: [
    'Creates a new sub context as if calling itself, but with the code of the given account. In particular the storage remains the same. Note that an account with no code will return success as true.',
    'If the size of the return data is not known, it can also be retrieved after the call with the instructions RETURNDATASIZE and RETURNDATACOPY (since the Byzantium fork).',
    'From the Tangerine Whistle fork, gas is capped at all but one 64th (remaining_gas / 64) of the remaining gas of the current context. If a call tries to send more, the gas is changed to match the maximum allowed.',
  ],
  references: [
    evmCodesOpcodesLink(0xf2),
    ethSpecsOpcodeSrc(MainnetHardfork.Shanghai, OpcodeGroup.System, 407),
  ],
  supportedHardforks: getMainnetHardforksFrom(MainnetHardfork.Frontier),
};
