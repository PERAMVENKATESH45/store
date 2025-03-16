function ChildComponent({sendDataToParent}){
    const handleClick =() =>{
        sendDataToParent("hello")
    }
    return(
        <>
        </>
    )
}
export default ChildComponent