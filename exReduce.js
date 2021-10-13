let votes = [
	{ name: 'Bob', age: 30, voted: true },
	{ name: 'Jake', age: 32, voted: true },
	{ name: 'Kate', age: 25, voted: false },
	{ name: 'Sam', age: 20, voted: false },
	{ name: 'Phil', age: 24, voted: true },
	{ name: 'Ed', age: 55, voted: true },
	{ name: 'Tami', age: 54, voted: true },
	{ name: 'Mary', age: 31, voted: false },
	{ name: 'Becky', age: 43, voted: false },
	{ name: 'Joey', age: 41, voted: true },
	{ name: 'Jeff', age: 30, voted: true },
	{ name: 'Zack', age: 19, voted: false }
];

const isYoung = age => age >= 18 && age <= 25;

const isMid = age => age >= 26 && age <= 35;

const isOld = age => age >= 36 && age <= 55;

const initialState = { votes: 0, total: 0 }

const reducer = (acc, cur) => {
    let votes = cur.voted 
                        ? acc.votes + 1 
                        : acc.votes;
    let total = acc.total + 1
    return { votes, total}
}

function getResult(votes) {
    const young = votes.filter(vote => isYoung(vote.age))
                            .reduce(reducer, initialState);

    const mid = votes.filter(vote => isMid(vote.age))
                          .reduce(reducer, initialState);

    const old = votes.filter(vote => isOld(vote.age))
                          .reduce(reducer, initialState);

	return  {
        numYoungVotes: young.votes,
        numYoungPeople: young.total,
        numMidVotesPeople: mid.votes,
        numMidsPeople: mid.total,
        numOldVotesPeople: old.votes,
        numOldPeople: old.total
    }
}

let result = getResult(votes);
console.log(result)