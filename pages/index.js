import Person from './Person';
import Link from 'next/link'
import Layout from '../components/Layout'

const Index = ({name, age}) => {
    return (
        <Layout>
            <Person />
            <Link href="/about">
                <a>about</a>
            </Link>
        </Layout>
    )
}

Index.getInitialProps = async (options) => {
    return {
        name: 'callie',
        age: 18
    }
}

export default Index
