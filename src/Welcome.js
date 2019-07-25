import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Welcome = () => (
  <React.Fragment>
    <div className="welcome-main">
      <div className="welcome">
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid direction="column" alignItems="center" item>
            <Paper style={{ background: 'rgba(255,255,255,0.8)' }}>
              <div className="welcome-content">
                <Typography component="h1" variant="h5" className="center">
                  Welcome to Lunkedin!
                </Typography>
                <p className="welcome-p">Lunkedin is an app that generates an exercise routine based on your
                squat, bench press, deadlift, and over-head press maximums. You can choose
                all other exercises. If you choose any of the recommended exercises, your
                maximums will be automatically generated based on your squat, bench press,
                and deadlift.
                </p>
                <p>This routine is ideal for lifters who want to get stronger, build muscle
                mass, and burn fat. The intensity undulates daily and weekly, and progresses
                in a linear fashion, monthly.
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  </React.Fragment>
)

export default Welcome
