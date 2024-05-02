import { precompiles as mainnetPrecompiles } from '@/chains/mainnet/vm/precompiles';
import type { Precompile } from '@/types';

const ARBITRUM_SMART_CONTRACT_ADDRESSES =
	'[Arbitrum Smart Contract Addresses](https://docs.arbitrum.io/for-devs/useful-addresses#precompiles)';

export const precompiles: Precompile[] = [
	...mainnetPrecompiles,
	{
		address: '0x0000000000000000000000000000000000000064',
		name: '`ArbSys`',
		description:
			'Exposes a variety of system-level functionality for interacting with Ethereum and understanding the call stack.',
		logicAbi: [
			'event L2ToL1Transaction(address caller, address indexed destination, uint256 indexed uniqueId, uint256 indexed batchNumber, uint256 indexInBatch, uint256 arbBlockNum, uint256 ethBlockNum, uint256 timestamp, uint256 callvalue, bytes data)',
			'event L2ToL1Tx(address caller, address indexed destination, uint256 indexed hash, uint256 indexed position, uint256 arbBlockNum, uint256 ethBlockNum, uint256 timestamp, uint256 callvalue, bytes data)',
			'event SendMerkleUpdate(uint256 indexed reserved, bytes32 indexed hash, uint256 indexed position)',
			'function arbBlockHash(uint256 arbBlockNum) view returns (bytes32)',
			'function arbBlockNumber() view returns (uint256)',
			'function arbChainID() view returns (uint256)',
			'function arbOSVersion() view returns (uint256)',
			'function getStorageGasAvailable() view returns (uint256)',
			'function isTopLevelCall() view returns (bool)',
			'function mapL1SenderContractAddressToL2Alias(address sender, address unused) pure returns (address)',
			'function myCallersAddressWithoutAliasing() view returns (address)',
			'function sendMerkleTreeState() view returns (uint256 size, bytes32 root, bytes32[] partials)',
			'function sendTxToL1(address destination, bytes data) payable returns (uint256)',
			'function wasMyCallersAddressAliased() view returns (bool)',
			'function withdrawEth(address destination) payable returns (uint256)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbSys reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbsys)',
		],
	},
	{
		address: '0x000000000000000000000000000000000000006E',
		name: '`ArbRetryableTx`',
		description: 'Manages retryable transactions related to data retrieval and interactions.',
		logicAbi: [
			'error NoTicketWithID()',
			'error NotCallable()',
			'event Canceled(bytes32 indexed ticketId)',
			'event LifetimeExtended(bytes32 indexed ticketId, uint256 newTimeout)',
			'event RedeemScheduled(bytes32 indexed ticketId, bytes32 indexed retryTxHash, uint64 indexed sequenceNum, uint64 donatedGas, address gasDonor, uint256 maxRefund, uint256 submissionFeeRefund)',
			'event Redeemed(bytes32 indexed userTxHash)',
			'event TicketCreated(bytes32 indexed ticketId)',
			'function cancel(bytes32 ticketId)',
			'function getBeneficiary(bytes32 ticketId) view returns (address)',
			'function getCurrentRedeemer() view returns (address)',
			'function getLifetime() view returns (uint256)',
			'function getTimeout(bytes32 ticketId) view returns (uint256)',
			'function keepalive(bytes32 ticketId) returns (uint256)',
			'function redeem(bytes32 ticketId) returns (bytes32)',
			'function submitRetryable(bytes32 requestId, uint256 l1BaseFee, uint256 deposit, uint256 callvalue, uint256 gasFeeCap, uint64 gasLimit, uint256 maxSubmissionFee, address feeRefundAddress, address beneficiary, address retryTo, bytes retryData)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbRetryableTx reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbretryabletx)',
		],
	},
	{
		address: '0x000000000000000000000000000000000000006C',
		name: '`ArbGasInfo`',
		description: 'Provides insight into the costs of using Arbitrum.',
		logicAbi: [
			'function getAmortizedCostCapBips() view returns (uint64)',
			'function getCurrentTxL1GasFees() view returns (uint256)',
			'function getGasAccountingParams() view returns (uint256, uint256, uint256)',
			'function getGasBacklog() view returns (uint64)',
			'function getGasBacklogTolerance() view returns (uint64)',
			'function getLastL1PricingSurplus() view returns (int256)',
			'function getLastL1PricingUpdateTime() view returns (uint64)',
			'function getL1BaseFeeEstimate() view returns (uint256)',
			'function getL1BaseFeeEstimateInertia() view returns (uint64)',
			'function getL1FeesAvailable() view returns (uint256)',
			'function getL1GasPriceEstimate() view returns (uint256)',
			'function getL1PricingEquilibrationUnits() view returns (uint256)',
			'function getL1PricingFundsDueForRewards() view returns (uint256)',
			'function getL1PricingSurplus() view returns (int256)',
			'function getL1PricingUnitsSinceUpdate() view returns (uint64)',
			'function getL1RewardRate() view returns (uint64)',
			'function getL1RewardRecipient() view returns (address)',
			'function getMinimumGasPrice() view returns (uint256)',
			'function getPerBatchGasCharge() view returns (int64)',
			'function getPricesInArbGas() view returns (uint256, uint256, uint256)',
			'function getPricesInArbGasWithAggregator(address aggregator) view returns (uint256, uint256, uint256)',
			'function getPricesInWei() view returns (uint256, uint256, uint256, uint256, uint256, uint256)',
			'function getPricesInWeiWithAggregator(address aggregator) view returns (uint256, uint256, uint256, uint256, uint256, uint256)',
			'function getPricingInertia() view returns (uint64)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbGasInfo reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbgasinfo)',
		],
	},
	{
		address: '0x0000000000000000000000000000000000000066',
		name: '`ArbAddressTable`',
		description:
			'Allows registering and retrieving commonly used addresses via indices, saving calldata.',
		logicAbi: [
			'function addressExists(address addr) view returns (bool)',
			'function compress(address addr) returns (bytes)',
			'function decompress(bytes buf, uint256 offset) view returns (address, uint256)',
			'function lookup(address addr) view returns (uint256)',
			'function lookupIndex(uint256 index) view returns (address)',
			'function register(address addr) returns (uint256)',
			'function size() view returns (uint256)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbAddressTable reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbaddresstable)',
		],
	},
	{
		address: '0x000000000000000000000000000000000000006F',
		name: '`ArbStatistics`',
		description:
			'Provides statistics about Arbitrum, such as the number of blocks, accounts, transactions, and contracts.',
		logicAbi: [
			'function getStats() view returns (uint256, uint256, uint256, uint256, uint256, uint256)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbStatistics reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbstatistics)',
		],
	},
	{
		address: '0x0000000000000000000000000000000000000070',
		name: '`ArbOwner`',
		description:
			'Provides owners with tools for managing the rollup. All calls to this precompile are authorized by the OwnerPrecompile wrapper, which ensures only a chain owner can access these methods.',
		logicAbi: [
			'event OwnerActs(bytes4 indexed method, address indexed owner, bytes data)',
			'function addChainOwner(address newOwner)',
			'function getAllChainOwners() view returns (address[])',
			'function getInfraFeeAccount() view returns (address)',
			'function getNetworkFeeAccount() view returns (address)',
			'function isChainOwner(address addr) view returns (bool)',
			'function releaseL1PricerSurplusFunds(uint256 maxWeiToRelease) returns (uint256)',
			'function removeChainOwner(address ownerToRemove)',
			'function scheduleArbOSUpgrade(uint64 newVersion, uint64 timestamp)',
			'function setAmortizedCostCapBips(uint64 cap)',
			'function setBrotliCompressionLevel(uint64 level)',
			'function setChainConfig(string calldata chainConfig)',
			'function setInfraFeeAccount(address newInfraFeeAccount)',
			'function setL1BaseFeeEstimateInertia(uint64 inertia)',
			'function setL1PricePerUnit(uint256 pricePerUnit)',
			'function setL1PricingEquilibrationUnits(uint256 equilibrationUnits)',
			'function setL1PricingInertia(uint64 inertia)',
			'function setL1PricingRewardRate(uint64 weiPerUnit)',
			'function setL1PricingRewardRecipient(address recipient)',
			'function setL2BaseFee(uint256 priceInWei)',
			'function setL2GasBacklogTolerance(uint64 sec)',
			'function setL2GasPricingInertia(uint64 sec)',
			'function setMaxTxGasLimit(uint64 limit)',
			'function setMinimumL2BaseFee(uint256 priceInWei)',
			'function setNetworkFeeAccount(address newNetworkFeeAccount)',
			'function setPerBatchGasCharge(int64 cost)',
			'function setSpeedLimit(uint64 limit)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbOwner reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbowner)',
		],
	},
	{
		address: '0x000000000000000000000000000000000000006b',
		name: '`ArbOwnerPublic`',
		description:
			'Provides non-owners with info about the current chain owners. The calls to this precompile do not require the sender be a chain owner. For those that are, see `ArbOwner`.',
		logicAbi: [
			'event ChainOwnerRectified(address rectifiedOwner)',
			'function getAllChainOwners() view returns (address[])',
			'function getBrotliCompressionLevel() view returns (uint64)',
			'function getInfraFeeAccount() view returns (address)',
			'function getNetworkFeeAccount() view returns (address)',
			'function getScheduledUpgrade() view returns (uint64 arbosVersion, uint64 scheduledForTimestamp)',
			'function isChainOwner(address addr) view returns (bool)',
			'function rectifyChainOwner(address ownerToRectify)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbOwnerPublic reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbownerpublic)',
		],
	},
	{
		address: '0x000000000000000000000000000000000000006D',
		name: '`ArbAggregator`',
		description:
			"Provides aggregators and their users methods for configuring how they participate in Ethereum aggregation. The default aggregator is Arbitrum's Sequencer.",
		logicAbi: [
			'function addBatchPoster(address newBatchPoster)',
			'function getBatchPosters() view returns (address[])',
			'function getDefaultAggregator() view returns (address)',
			'function getFeeCollector(address batchPoster) view returns (address)',
			'function getPreferredAggregator(address addr) view returns (address, bool)',
			'function getTxBaseFee(address aggregator) view returns (uint256)',
			'function setFeeCollector(address batchPoster, address newFeeCollector)',
			'function setTxBaseFee(address aggregator, uint256 feeInL1Gas)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbAggregator reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbaggregator)',
		],
	},
	{
		address: '0x0000000000000000000000000000000000000068',
		name: '`ArbFunctionTable`',
		description:
			'Allows aggregators to manage function tables for one form of transaction compression.',
		logicAbi: [
			'function get(address addr, uint256 index) view returns (uint256, bool, uint256)',
			'function size(address addr) view returns (uint256)',
			'function upload(bytes buf)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbFunctionTable reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbfunctiontable)',
		],
	},
	{
		address: '0x0000000000000000000000000000000000000065',
		name: '`ArbInfo`',
		description: 'Provides the ability to lookup basic info about accounts and contracts.',
		logicAbi: [
			'function getBalance(address account) view returns (uint256)',
			'function getCode(address account) view returns (bytes memory)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[ArbInfo reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/precompiles#arbinfo)',
		],
	},
	{
		address: '0x00000000000000000000000000000000000000C8',
		name: '`NodeInterface`',
		description:
			'Only accessible via RPCs (not deployed on-chain), includes helper functions to construct proofs for executing L2->L1 messages, estimate gas consumption and more.',
		logicAbi: [
			'function blockL1Num(uint64 l2BlockNum) view returns (uint64 l1BlockNum)',
			'function constructOutboxProof(uint64 size, uint64 leaf) view returns (bytes32 send, bytes32 root, bytes32[] proof)',
			'function estimateRetryableTicket(address sender, uint256 deposit, address to, uint256 l2CallValue, address excessFeeRefundAddress, address callValueRefundAddress, bytes data)',
			'function findBatchContainingBlock(uint64 blockNum) view returns (uint64 batch)',
			'function gasEstimateComponents(address to, bool contractCreation, bytes data) payable returns (uint64 gasEstimate, uint64 gasEstimateForL1, uint256 baseFee, uint256 l1BaseFeeEstimate)',
			'function gasEstimateL1Component(address to, bool contractCreation, bytes data) payable returns (uint64 gasEstimateForL1, uint256 baseFee, uint256 l1BaseFeeEstimate)',
			'function getL1Confirmations(bytes32 blockHash) view returns (uint64 confirmations)',
			'function legacyLookupMessageBatchProof(uint256 batchNum, uint64 index) view returns (bytes32[] proof, uint256 path, address l2Sender, address l1Dest, uint256 l2Block, uint256 l1Block, uint256 timestamp, uint256 amount, bytes calldataForL1)',
			'function l2BlockRangeForL1(uint64 blockNum) view returns (uint64 firstBlock, uint64 lastBlock)',
			'function nitroGenesisBlock() pure returns (uint256 number)',
		],
		deprecated: false,
		references: [
			ARBITRUM_SMART_CONTRACT_ADDRESSES,
			'[NodeInterface reference](https://docs.arbitrum.io/for-devs/dev-tools-and-resources/nodeinterface)',
		],
	},
];
