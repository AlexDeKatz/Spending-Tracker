import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    let maxValue = props.dataPoints.reduce((ele, max) =>
        (ele.value > max.value ? ele : max), props.dataPoints[0]
    )

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue.value}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;