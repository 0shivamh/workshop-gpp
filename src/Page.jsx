
const Page=()=>{

    return(
        <>
            <p className="font-bold text-xl">Hello {localStorage.getItem('name')}</p>
        </>
    )
}
export default Page; 