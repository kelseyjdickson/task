const tasks = [
    {
        id:1,
        text: 'Dermotogy Appt',
        day: 'Jan 13, 2022 at 3:45pm',
        reminder: true

    },
    {
        id:2,
        text: 'Physical Appt',
        day: 'Jan 14, 2022 at 9:30am',
        reminder: false

    },
    {
        id:3,
        text: 'Gyno Appt',
        day: 'Jan 26, 2022 @ 10:45am',
        reminder: true

    }
]

const Tasks = () => {

   let mask = tasks.map(info => (
       <>
        <h1 key={info.id}>{info.text} </h1>
        <h2>{info.day}</h2>
        </>
   )
   )
    return (
        <div>
            {mask}
        </div>
    )
}

export default Tasks
