import Person from './Person';
import Link from 'next/link'

const Index = ({name, age}) => {
    return (
        <div>
            <Person />
            <Link href="/about">
                <a>about</a>
            </Link>
        </div>
    )
}

Index.getInitialProps = async (options) => {
    return {
        name: 'callie',
        age: 18
    }
}

export default Index
