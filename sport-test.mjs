import{strict as a}from'node:assert';import{sportBenefit as s}from'./dist/sport.mjs';
a.equal(s(29802,70,'80',{military:true,confirmed:true}).amount,23841.6);
a.equal(s(29802,70,'80',{military:false,confirmed:true}).percent,70);
a.equal(s(29802,30,'90',{military:true,confirmed:true}).amount,26821.8);
a.equal(s(29802,70,'90',{military:true}).percent,90);
for(const rank of ['100-ms','100-msmk','100-zms'])a.equal(s(29802,70,rank,{confirmed:true}).amount,29802);
for(const rank of ['0','0-second','0-third'])a.equal(s(29802,30,rank,{confirmed:true,military:true}).percent,30);
a.equal(s(29802,70,'90',{military:true,confirmed:true}).percent,90);
a.equal(s(29802,0,'80',{military:true,confirmed:false}).potential,23841.6);
console.log('PASS sports: rates80/90/100, conditions, unsuitable sports, no summation');

