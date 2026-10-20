import{strict as a}from'node:assert';import{netAllowance as n}from'./dist/net.mjs';import{sportBenefit as s}from'./dist/sport.mjs';
a.deepEqual(n(23841.6),{gross:23841.6,net:20742.19,tax:3099.41,annual:248906.28});
a.equal(n(4470.3).net,3889.16);a.equal(n(0).annual,0);a.throws(()=>n(-1));
a.equal(s(29802,15,'80',{military:true}).percent,80);a.equal(s(29802,70,'80',{military:false}).percent,70);a.equal(s(29802,15,'90',{military:true}).percent,90);a.equal(s(29802,70,'100-ms').percent,100);a.equal(s(29802,30,'0').percent,30);
console.log('PASS no checkbox; sports eligibility; monthly/annual net13%; zero and invalid amounts');
