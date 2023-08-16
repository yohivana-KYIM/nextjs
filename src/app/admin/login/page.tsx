import { GetServerSideProps } from 'next';

const page = () => {
    return (
        <p className='text-center text-green-500 font-bold'>
            Hi Mom
        </p>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default page