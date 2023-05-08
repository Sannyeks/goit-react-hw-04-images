import { LoaderContainer } from './Loader.styled';
import { Vortex } from 'react-loader-spinner';
const Loader = () => {
    return (
        <LoaderContainer>
            <Vortex
                visible={true}
                height="250"
                width="250"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['#04200e', '#215a43', '#42877b', '#216868', '#0d485e']}
            />
        </LoaderContainer>
    );
};

export default Loader;