import React from 'react'
import Paper from '@material-ui/core/Paper'

const Welcome = () => (
  <React.Fragment>
    <div className="welcome-main">
      <div className="welcome">
        <Paper>
          <div className="welcome-content">
            <h1 className="center">Welcome to Lunkedin!</h1>
            <p className="welcome-p">Lunkedin is an app that generates an exercise routine based on your
            squat, bench press, deadlift, and over-head press maximums. You can choose
            all other exercises. If you choose any of the recommended exercises, your
            maximums will be automatically generated based on your squat, bench press,
            and deadlift.
            </p>
            <p>This routine is ideal for lifters who want to get stronger, build muscle
            mass, and burn fat. The intensity undulates daily and weekly and progresses
            in a linear fashion, monthly.
            </p>
          </div>
        </Paper>
      </div>
    </div>
  </React.Fragment>
)

export default Welcome
