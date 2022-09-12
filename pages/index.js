import Landing from '../components/Landing/Landing'

export default function Home(){

    const notLoggedIn = true

    if(notLoggedIn){
        return <Landing />
    } else {
        return (
            <div>
                <p>User Dashboard</p>
                <p>Under construction....</p>
            </div>
        )
    }
}