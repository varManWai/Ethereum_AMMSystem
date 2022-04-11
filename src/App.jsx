import { Route, Switch } from 'react-router-dom';

import Uniswap from './pages/Uniswap';
import Pools from './pages/Pools';
import Layout from './components/layout/Layout';
import { useEffect } from 'react/cjs/react.production.min';

function App() {
  useEffect(() => {
    loadWeb3();
  });


  const loadWeb3 = async () => {
    // initWeb3: async function() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      // Request account access if needed
      //await window.ethereum.enable()
      await window.ethereum.request({ method: "eth_requestAccounts" });

    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      window.alert('Non-Ethereum browser detected. http://localhost:7545 and metamask')
    }

  }

  //load the metamask account and display on web page
  const loadBlockchainData = async () => {
    const web3 = window.web3
    //load account
    const accounts = await web3.eth.getAccounts()
    //console.log(accounts)
    this.setState({ account: accounts[0] })

    //console.log(Marketplace.abi, Marketplace.networks[5777].address)
    const networkId = await web3.eth.net.getId()
    //console.log(networkId)
    const networkData = Marketplace.networks[networkId]
    if (networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      // console.log(productCount.toString())

      this.setState({ productCount })
      //load product
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call()
        this.setState({
          products: [...this.state.products, product]
        })
      }

      this.setState({ loading: false })
      //console.log(this.state.products)
    } else {
      window.alert('Marketplace contract not deployed to detected network')

    }

    //const abi = Marketplace.abi
    //const address = Marketplace.networks[5777].address
    //make it dynamic to get network ID
    //const address = Marketplace.networks[networkId].address
    //const marketplace = new web3.eth.Contract(abi, address)
    //console.log(marketplace)
  }

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Uniswap />
        </Route>
        <Route path='/pools'>
          <Pools />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
