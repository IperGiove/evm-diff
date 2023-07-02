import { caller as baseOpcode } from '@/chains/mainnet/vm/opcodes/environment/caller';
import { Opcode } from '@/types';

const { supportedHardforks: _supportedHardforks, ...opcode } = baseOpcode;
export const caller: Omit<Opcode, 'supportedHardforks'> = {
  ...opcode,
  description:
    'If the transaction is an L1 ⇒ L2 transaction, and this is the initial call (rather than an internal transaction from one contract to another), then `msg.sender` is set to the aliased address of the address that triggered the L1 ⇒ L2 transaction. Otherwise, this opcode behaves normally.',
  references: [
    {
      name: 'Differences between Optimism and Ethereum',
      url: 'https://community.optimism.io/docs/developers/build/differences/#opcode-differences',
    },
    {
      name: 'Aliased address',
      url: 'https://community.optimism.io/docs/developers/build/differences/#address-aliasing',
    },
  ],
};