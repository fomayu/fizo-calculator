export const levels=[['none','Без уровня',0],['three','3 уровень',0],['two','2 уровень',15],['one','1 уровень',30],['highest','Высший уровень',70]];
export const factors=[1030,1037,1040,1105,1076,1040];
export function indexedSalary(base){if(!Number.isInteger(base)||base<=0)throw Error('Некорректный оклад');return factors.reduce((v,k)=>Math.ceil(v*k/1000),base);}
export function ageGroup(age){if(!Number.isInteger(age)||age<18||age>100)throw Error('Укажите возраст от 18 до 100 лет');return age<25?1:Math.min(9,Math.floor((age-25)/5)+2);}
export function allowance(salary,level){if(!Number.isInteger(salary)||salary<1)throw Error('Некорректный оклад');const row=levels.find(x=>x[0]===level);if(!row)throw Error('Выберите уровень');const percent=row[2];return {percent,amount:Math.round(salary*percent)/100};}
export function sumPoints(values){if(values.some(v=>v===''||v===null||!Number.isInteger(Number(v))||Number(v)<0||Number(v)>100))return null;return values.reduce((a,b)=>a+Number(b),0);}
export function gap(total,target){if(total===null||!Number.isFinite(target))return null;return Math.max(0,target-total);}
