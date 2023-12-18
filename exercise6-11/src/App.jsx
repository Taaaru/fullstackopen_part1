import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div id='App'>
            <h1>give feedback</h1>
            <Button text='good' onClick={() => setGood(good + 1)} />
            <Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
            <Button text='bad' onClick={() => setBad(bad + 1)} />
            <h1>statistics</h1>
            <Statistics stats={[good, neutral, bad]} />
        </div>
    )
}

const Statistics = (props) => {
    let [good, neutral, bad] = props.stats

    let all = good + neutral + bad
    let average = (good * 1 + bad * -1) / all
    let positive_percentage = good / all

    if (all > 0) {
        return (
            <div id='display'>
                <table>
                    <tbody>
                        <StatisticsLine text='good' value={good} />
                        <StatisticsLine text='neutral' value={neutral} />
                        <StatisticsLine text='bad' value={bad} />
                        <StatisticsLine text='all' value={all} />
                        <StatisticsLine text='average' value={average.toFixed(1)} />
                        <StatisticsLine text='positive' value={(positive_percentage * 100).toFixed(1) + ' %'} />
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div id='display'>
                <p>No feedback given</p>
            </div>
        )
    }
}

const StatisticsLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default App