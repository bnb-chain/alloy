//! Block sidecars RPC types.

use alloy_eips::eip4844::{Blob, Bytes48};
use alloy_primitives::B256;
use serde::{Deserialize, Serialize, Serializer};

/// Blob sidecar representation
#[derive(Clone, Debug, Default, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BlobSidecar {
    /// Transaction sidecar.
    #[serde(flatten)]
    pub blob_transaction_sidecar: BlobTransactionSidecar,
    /// Block number.
    #[serde(default)]
    pub block_number: u64,
    /// Block hash.
    #[serde(default)]
    pub block_hash: B256,
    /// Transaction index.
    #[serde(default)]
    pub tx_index: u64,
    /// Transaction hash.
    #[serde(default)]
    pub tx_hash: B256,
}

#[derive(Clone, Debug, Default, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
/// Transaction sidecar representation
pub struct BlobTransactionSidecar {
    /// The blob data.
    pub blobs: Vec<Blob>,
    /// The blob commitments.
    pub commitments: Vec<Bytes48>,
    /// The blob proofs.
    pub proofs: Vec<Bytes48>,
}
