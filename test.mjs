import{strict as a}from'node:assert';import{indexedSalary,ageGroup,allowance,sumPoints,gap}from'./dist/core.mjs';import fs from'node:fs';
const data=JSON.parse(fs.readFileSync(new URL('./dist/data.json',import.meta.url)));let tests=0;const test=(name,fn)=>{fn();tests++;console.log('PASS',name);};
test('all 50 grades, strictly increasing',()=>{a.equal(data.salary2019.length,50);for(let i=1;i<50;i++)a.ok(indexedSalary(data.salary2019[i])>indexedSalary(data.salary2019[i-1]));});
test('2019 base, separate ceilings, 2025 replacement, conditional 4%',()=>{a.equal(indexedSalary(5424),7453);a.equal(indexedSalary(10848),14905);a.equal(indexedSalary(21695),29802);});
test('age boundaries',()=>{for(const[n,g]of[[18,1],[24,1],[25,2],[29,2],[30,3],[49,6],[50,7],[59,8],[60,9],[100,9]])a.equal(ageGroup(n),g);for(const n of[17,101,30.5,NaN])a.throws(()=>ageGroup(n));});
test('level rates and no rank salary in base',()=>{a.deepEqual(allowance(29802,'highest'),{percent:70,amount:20861.4});a.equal(allowance(29802,'two').amount,4470.3);a.equal(allowance(29802,'one').amount,8940.6);a.equal(allowance(29802,'three').amount,0);a.throws(()=>allowance(29802,''));});
test('empty is not zero, zero and 100 allowed',()=>{a.equal(sumPoints(['',20,30]),null);a.equal(sumPoints([0,100,'50']),150);for(const v of[-1,101,1.2,'x'])a.equal(sumPoints([v,20]),null);});
test('gap never negative and missing is unknown',()=>{a.equal(gap(170,190),20);a.equal(gap(200,190),0);a.equal(gap(null,190),null);});
console.log(`${tests} test groups passed`);
