import logo from './logo.svg';
import './App.css';
import GetUser from './components/getUser';
import { HttpLink, InMemoryCache ,ApolloClient, from , ApolloProvider } from "@apollo/client"
import {onError} from "@apollo/client/link/error"
import MutationForm from './components/mutationForm';



const errorLink = onError(({graphqlErrors,networkError}) => {
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path}) => {
      alert(`graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({url:"/graphql"},)

])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link , 
})

// const networkInterface = createNetworkInterface({ 
//   uri: 'http://localhost:4000/graphql',
// });
// const client = new ApolloClient({
//   networkInterface,
// });

function App() {
  return (
    <div className="App">
    <ApolloProvider client={client}>
    <MutationForm/>

     <GetUser/>

    </ApolloProvider>
    </div>
  );
}

export default App;
