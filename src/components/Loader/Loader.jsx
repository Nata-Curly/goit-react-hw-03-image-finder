import { Dna } from 'react-loader-spinner'

const Loader = () => {
    return ( <Dna
  visible={true}
  height="150"
  width="150"
  ariaLabel="dna-loading"
  wrapperStyle={{display: 'inline-block', textAlign: 'center'}}
  wrapperClass="dna-wrapper"
/> );
}
 
export default Loader;
