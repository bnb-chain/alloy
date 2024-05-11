(function() {var type_impls = {
"alloy_contract":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CallBuilder%3CT,+%26P,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#468-480\">source</a><a href=\"#impl-CallBuilder%3CT,+%26P,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: Transport, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, D, N: Network&gt; <a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;P</a>, D, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_cloned_provider\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#470-479\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.with_cloned_provider\" class=\"fn\">with_cloned_provider</a>(self) -&gt; <a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, P, D, N&gt;</h4></section></summary><div class=\"docblock\"><p>Clones the provider and returns a new builder with the cloned provider.</p>\n</div></details></div></details>",0,"alloy_contract::call::SolCallBuilder","alloy_contract::call::DynCallBuilder","alloy_contract::call::RawCallBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CallBuilder%3CT,+P,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#269-466\">source</a><a href=\"#impl-CallBuilder%3CT,+P,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: Transport + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, P: Provider&lt;T, N&gt;, D: <a class=\"trait\" href=\"alloy_contract/eth_call/trait.CallDecoder.html\" title=\"trait alloy_contract::eth_call::CallDecoder\">CallDecoder</a>, N: Network&gt; <a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, P, D, N&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new_inner_deploy\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#270-279\">source</a><h4 class=\"code-header\">fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.new_inner_deploy\" class=\"fn\">new_inner_deploy</a>(provider: P, input: Bytes, decoder: D) -&gt; Self</h4></section><section id=\"method.new_inner_call\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#281-290\">source</a><h4 class=\"code-header\">fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.new_inner_call\" class=\"fn\">new_inner_call</a>(provider: P, input: Bytes, decoder: D) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#293-296\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.from\" class=\"fn\">from</a>(self, from: Address) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>from</code> field in the transaction to the provided value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#299-302\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.kind\" class=\"fn\">kind</a>(self, to: TxKind) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the transaction request to the provided tx kind.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#305-308\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.to\" class=\"fn\">to</a>(self, to: Address) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>to</code> field in the transaction to the provided address.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sidecar\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#311-314\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.sidecar\" class=\"fn\">sidecar</a>(self, blob_sidecar: BlobTransactionSidecar) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>sidecar</code> field in the transaction to the provided value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.legacy\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#317-319\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.legacy\" class=\"fn\">legacy</a>(self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Uses a Legacy transaction instead of an EIP-1559 one to execute the call</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gas\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#322-325\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.gas\" class=\"fn\">gas</a>(self, gas: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>gas</code> field in the transaction to the provided value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gas_price\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#330-333\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.gas_price\" class=\"fn\">gas_price</a>(self, gas_price: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>gas_price</code> field in the transaction to the provided value\nIf the internal transaction is an EIP-1559 one, then it sets both\n<code>max_fee_per_gas</code> and <code>max_priority_fee_per_gas</code> to the same value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_fee_per_gas\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#336-339\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.max_fee_per_gas\" class=\"fn\">max_fee_per_gas</a>(self, max_fee_per_gas: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>max_fee_per_gas</code> in the transaction to the provide value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_priority_fee_per_gas\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#342-345\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.max_priority_fee_per_gas\" class=\"fn\">max_priority_fee_per_gas</a>(self, max_priority_fee_per_gas: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>max_priority_fee_per_gas</code> in the transaction to the provide value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.access_list\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#348-351\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.access_list\" class=\"fn\">access_list</a>(self, access_list: AccessList) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>access_list</code> in the transaction to the provided value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.value\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#354-357\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.value\" class=\"fn\">value</a>(self, value: U256) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>value</code> field in the transaction to the provided value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.nonce\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#360-363\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.nonce\" class=\"fn\">nonce</a>(self, nonce: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>nonce</code> field in the transaction to the provided value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#366-372\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.map\" class=\"fn\">map</a>&lt;F&gt;(self, f: F) -&gt; Self<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(N::TransactionRequest) -&gt; N::TransactionRequest,</div></h4></section></summary><div class=\"docblock\"><p>Applies a function to the internal transaction request.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#375-378\">source</a><h4 class=\"code-header\">pub const fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.block\" class=\"fn\">block</a>(self, block: BlockId) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <code>block</code> field for sending the tx to the chain</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#385-388\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.state\" class=\"fn\">state</a>(self, state: StateOverride) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"https://geth.ethereum.org/docs/rpc/ns-eth#3-object---state-override-set\">state override set</a>.</p>\n<h5 id=\"note\"><a class=\"doc-anchor\" href=\"#note\">§</a>Note</h5>\n<p>Not all client implementations will support this as a parameter to <code>eth_call</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.calldata\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#391-393\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.calldata\" class=\"fn\">calldata</a>(&amp;self) -&gt; &amp;Bytes</h4></section></summary><div class=\"docblock\"><p>Returns the underlying transaction’s ABI-encoded data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.estimate_gas\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#396-398\">source</a><h4 class=\"code-header\">pub async fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.estimate_gas\" class=\"fn\">estimate_gas</a>(&amp;self) -&gt; <a class=\"type\" href=\"alloy_contract/error/type.Result.html\" title=\"type alloy_contract::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the estimated gas cost for the underlying transaction to be executed</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#407-409\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.call\" class=\"fn\">call</a>(&amp;self) -&gt; <a class=\"struct\" href=\"alloy_contract/eth_call/struct.EthCall.html\" title=\"struct alloy_contract::eth_call::EthCall\">EthCall</a>&lt;'_, '_, '_, D, T, N&gt;</h4></section></summary><div class=\"docblock\"><p>Queries the blockchain via an <code>eth_call</code> without submitting a transaction to the network.\nIf <a href=\"alloy_contract/call/struct.CallBuilder.html#method.state\" title=\"method alloy_contract::call::CallBuilder::state\"><code>state overrides</code></a> are set, they will be applied to the call.</p>\n<p>Returns the decoded the output by using the provided decoder.\nIf this is not desired, use <a href=\"alloy_contract/call/struct.CallBuilder.html#method.call_raw\" title=\"method alloy_contract::call::CallBuilder::call_raw\"><code>call_raw</code></a> to get the raw output data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#417-424\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.call_raw\" class=\"fn\">call_raw</a>(&amp;self) -&gt; <a class=\"struct\" href=\"alloy_contract/eth_call/struct.EthCall.html\" title=\"struct alloy_contract::eth_call::EthCall\">EthCall</a>&lt;'_, '_, '_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, T, N&gt;</h4></section></summary><div class=\"docblock\"><p>Queries the blockchain via an <code>eth_call</code> without submitting a transaction to the network.\nIf <a href=\"alloy_contract/call/struct.CallBuilder.html#method.state\" title=\"method alloy_contract::call::CallBuilder::state\"><code>state overrides</code></a> are set, they will be applied to the call.</p>\n<p>Does not decode the output of the call, returning the raw output data instead.</p>\n<p>See <a href=\"alloy_contract/call/struct.CallBuilder.html#method.call\" title=\"method alloy_contract::call::CallBuilder::call\"><code>call</code></a> for more information.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_output\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#428-430\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.decode_output\" class=\"fn\">decode_output</a>(\n    &amp;self,\n    data: Bytes,\n    validate: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>\n) -&gt; <a class=\"type\" href=\"alloy_contract/error/type.Result.html\" title=\"type alloy_contract::error::Result\">Result</a>&lt;D::<a class=\"associatedtype\" href=\"alloy_contract/eth_call/trait.CallDecoder.html#associatedtype.CallOutput\" title=\"type alloy_contract::eth_call::CallDecoder::CallOutput\">CallOutput</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Decodes the output of a contract function using the provided decoder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deploy\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#442-449\">source</a><h4 class=\"code-header\">pub async fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.deploy\" class=\"fn\">deploy</a>(&amp;self) -&gt; <a class=\"type\" href=\"alloy_contract/error/type.Result.html\" title=\"type alloy_contract::error::Result\">Result</a>&lt;Address&gt;</h4></section></summary><div class=\"docblock\"><p>Broadcasts the underlying transaction to the network as a deployment transaction, returning\nthe address of the deployed contract after the transaction has been confirmed.</p>\n<p>Returns an error if the transaction is not a deployment transaction, or if the contract\naddress is not found in the deployment transaction’s receipt.</p>\n<p>For more fine-grained control over the deployment process, use <a href=\"alloy_contract/call/struct.CallBuilder.html#method.send\" title=\"method alloy_contract::call::CallBuilder::send\"><code>send</code></a> instead.</p>\n<p>Note that the deployment address can be pre-calculated if the <code>from</code> address and <code>nonce</code> are\nknown using <a href=\"alloy_contract/call/struct.CallBuilder.html#method.calculate_create_address\" title=\"method alloy_contract::call::CallBuilder::calculate_create_address\"><code>calculate_create_address</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.send\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#455-457\">source</a><h4 class=\"code-header\">pub async fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.send\" class=\"fn\">send</a>(&amp;self) -&gt; <a class=\"type\" href=\"alloy_contract/error/type.Result.html\" title=\"type alloy_contract::error::Result\">Result</a>&lt;PendingTransactionBuilder&lt;'_, T, N&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Broadcasts the underlying transaction to the network.</p>\n<p>Returns a builder for configuring the pending transaction watcher.\nSee [<code>Provider::send_transaction</code>] for more information.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.calculate_create_address\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#463-465\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_contract/call/struct.CallBuilder.html#tymethod.calculate_create_address\" class=\"fn\">calculate_create_address</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Address&gt;</h4></section></summary><div class=\"docblock\"><p>Calculates the address that will be created by the transaction, if any.</p>\n<p>Returns <code>None</code> if the transaction is not a contract creation (the <code>to</code> field is set), or if\nthe <code>from</code> or <code>nonce</code> fields are not set.</p>\n</div></details></div></details>",0,"alloy_contract::call::SolCallBuilder","alloy_contract::call::DynCallBuilder","alloy_contract::call::RawCallBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CallBuilder%3CT,+P,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#121\">source</a><a href=\"#impl-Clone-for-CallBuilder%3CT,+P,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Network&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, P, D, N&gt;<div class=\"where\">where\n    N::TransactionRequest: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#121\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, P, D, N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy_contract::call::SolCallBuilder","alloy_contract::call::DynCallBuilder","alloy_contract::call::RawCallBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CallBuilder%3CT,+P,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#513-523\">source</a><a href=\"#impl-Debug-for-CallBuilder%3CT,+P,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, P, D: <a class=\"trait\" href=\"alloy_contract/eth_call/trait.CallDecoder.html\" title=\"trait alloy_contract::eth_call::CallDecoder\">CallDecoder</a>, N: Network&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, P, D, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#515-522\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy_contract::call::SolCallBuilder","alloy_contract::call::DynCallBuilder","alloy_contract::call::RawCallBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoFuture-for-CallBuilder%3CT,+P,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#492-511\">source</a><a href=\"#impl-IntoFuture-for-CallBuilder%3CT,+P,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, P, D, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html\" title=\"trait core::future::into_future::IntoFuture\">IntoFuture</a> for <a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, P, D, N&gt;<div class=\"where\">where\n    T: Transport + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    P: Provider&lt;T, N&gt;,\n    D: <a class=\"trait\" href=\"alloy_contract/eth_call/trait.CallDecoder.html\" title=\"trait alloy_contract::eth_call::CallDecoder\">CallDecoder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    N: Network,\n    Self: 'static,</div></h3></section></summary><div class=\"docblock\"><p><a href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\"><code>CallBuilder</code></a> can be turned into a <a href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\"><code>Future</code></a> automatically with <code>.await</code>.</p>\n<p>Defaults to calling <a href=\"alloy_contract/call/struct.CallBuilder.html#method.call\" title=\"method alloy_contract::call::CallBuilder::call\"><code>CallBuilder::call</code></a>.</p>\n<h4 id=\"note\"><a class=\"doc-anchor\" href=\"#note\">§</a>Note</h4>\n<p>This requires <code>Self: 'static</code> due to a current limitation in the Rust type system, namely that\nthe associated future type, the returned future, must be a concrete type (<code>Box&lt;dyn Future ...&gt;</code>)\nand cannot be an opaque type (<code>impl Future ...</code>) because <code>impl Trait</code> in this position is not\nstable yet. See <a href=\"https://github.com/rust-lang/rust/issues/63063\">rust-lang/rust#63063</a>.</p>\n</div><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;D as <a class=\"trait\" href=\"alloy_contract/eth_call/trait.CallDecoder.html\" title=\"trait alloy_contract::eth_call::CallDecoder\">CallDecoder</a>&gt;::<a class=\"associatedtype\" href=\"alloy_contract/eth_call/trait.CallDecoder.html#associatedtype.CallOutput\" title=\"type alloy_contract::eth_call::CallDecoder::CallOutput\">CallOutput</a>, <a class=\"enum\" href=\"alloy_contract/error/enum.Error.html\" title=\"enum alloy_contract::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>The output that the future will produce on completion.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoFuture\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IntoFuture\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture\" class=\"associatedtype\">IntoFuture</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = &lt;<a class=\"struct\" href=\"alloy_contract/call/struct.CallBuilder.html\" title=\"struct alloy_contract::call::CallBuilder\">CallBuilder</a>&lt;T, P, D, N&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html\" title=\"trait core::future::into_future::IntoFuture\">IntoFuture</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#associatedtype.Output\" title=\"type core::future::into_future::IntoFuture::Output\">Output</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt;</h4></section></summary><div class='docblock'>Which kind of future are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_future\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_contract/call.rs.html#507-510\">source</a><a href=\"#method.into_future\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#tymethod.into_future\" class=\"fn\">into_future</a>(self) -&gt; Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture\" title=\"type core::future::into_future::IntoFuture::IntoFuture\">IntoFuture</a></h4></section></summary><div class='docblock'>Creates a future from a value. <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#tymethod.into_future\">Read more</a></div></details></div></details>","IntoFuture","alloy_contract::call::SolCallBuilder","alloy_contract::call::DynCallBuilder","alloy_contract::call::RawCallBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()