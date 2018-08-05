/*
함수 sumFrom1ToN은 n을 인자로 받아서 1부터 n까지 더한 값을 return하는 함수입니다.
예를들어 sumFrom1ToN(3)을 호출하면 1+2+3인 6을 return합니다.
코드 4번째줄과와 코드 5번째줄을 수정해서 sumFrom1ToN을 완성해 보세요.
*/

function sumFrom1ToN(n){
    var count = 1;
    var sum=0;
    while( count <= n ){
        sum = sum +count;
        count++;
    }
    return sum;
}
