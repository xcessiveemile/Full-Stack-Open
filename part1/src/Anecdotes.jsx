import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'The best time to plant a tree was 20 years ago. The second best time is now.',
  'Programming without an extremely heavy test suite is like playing a game without a scoreboard.',
]

const Anecdotes = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const voteForSelected = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const highestVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={voteForSelected}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestVotes]}</p>
      <p>has {votes[highestVotes]} votes</p>
    </div>
  )
}

export default Anecdotes
