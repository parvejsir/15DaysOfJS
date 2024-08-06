function add(a,b=0,c=0){
    return a+b+c;
}
const studentInfo = {
    name: "Parvej",
    dept: "Computer Engineering",
    year: "Second",
    gender(){
        return 'Male';
    }
};
function sub(a,b){
    return a-b;
}
export default function mul(a,b,c){
    return a*b*c;
}
export{
    add,studentInfo,sub
}