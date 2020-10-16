function getMinCost(crew_id, job_id) {
    // Write your code here
   const crew = crew_id.sort((a, b) => a - b)
   const job = job_id.sort((a, b) => a - b)

   let result = []
   for (let i = 0; i < crew.length; i++) {
       result.push(crew[i] + job[i])
   }
  
   const sorted = result.sort((a, b) => a + b)
   return sorted.reduce((a, b) => a -b)
}


const crew_id  = [ 5, 3, 1, 4, 6 ]
const job_id =[ 9, 8, 3, 15, 1 ]

console.log('res', getMinCost(crew_id, job_id ));
