import {
  GetServerSideProps,
  NextPage,
} from 'next';

const Page: NextPage = () => {
    return (
        <p className='text-center text-green-500 font-bold'>
            Hi Mom
        </p>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {}
    };
}

export default Page;
