function Hello(){
    let myName = 'Prince';
    let number = 9;
    let fullName = () => {
        return 'Prince Raj';
    }
    return <h3>
        Hello this is the Future speaking.
        <br />
        MessageNo: {number} I'm ur {fullName()}
    </h3>
}
export default Hello;