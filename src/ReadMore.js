import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const ReadMore = () => (
  <React.Fragment>
    <div className="read-more-container">
      <div className="read-more">
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid direction="column" alignItems="center" item>
            <Paper style={{ background: 'rgba(255,255,255,0.9)' }}>
              <div className="welcome-content">
                <Typography component="h1" variant="h5" className="center">
                  About the Routine
                </Typography>
                <p>This template is largely based on a free mass-building template provided
                by Brian Alsruhe, and my experiene as a NASM Personal Trainer. If you have any exercise-limitations or health-concerns, consult a physician
                before doing any of these exercises. This app is to be used as a tool, not a personal
                recommendation. The weight suggestions are mostly based on average ratios for one-rep maxes
                on strengthlevel.com. For example, the average incline-bench press max is
                80% of the average bench-press max. LunkedIn will automatically suggest this, however your true
                one rep max may differ.</p>
                <p>
                Also note that this app does not suggest warmups or stretching, though I highly recommend
                incorporating them into your routine!
                </p>
                <p>
                The routine is 12 weeks long. Each wave is 3 weeks and each
                week has 4 days. Each day focuses on exercises that will strengthen one of four lifts:
                day 1-Squat, day 2-over-head press, day 3-deadlift, day 4-bench press.
                </p>
                <p>
                Each day is broken up into 3 circuits: primary, technique, and assistance. Upper-body circuits have
                a pull, a push, and an oblique exercise. Squat and deadlift circuits start with a primer that challenges
                you to move explosively, and end with a core exercise. Rest for 90 seconds after each circuit.
                </p>
                <p>
                The primary circuit is intended to be a variation of the lift-of-the-day that challenges your weakness.
                For example, if lockout is difficult on deadlift, Romanian deadlift would be an appropriate
                exercise for the primary circuit of day 3.
                </p>
                <p>
                The technique set is automatically one of the 4 main lifts. If it is deadlift day, the technique
                circuit is squat and vice versa. If it is bench press day, the technique circuit is overhead press
                and vice versa. The 3 intensities of technique are speed (10 sets of 3 reps),
                endurance (4 sets of 8), and reps (5 sets of 5). For speed circuits, set a stopwatch
                and perform the circuit as fast as possible every minute for 10 minutes.
                </p>
                <p>
                Assistance exercises are meant to finish the workout. If you are exhausted after the technique set,
                end your workout. Depending on your goals, you may also choose to replace this circuit with corrective exercises, isolation
                exercises, strong-man exercises, conditioning, etc.
                </p>
                <p>
                -Eric Bowman
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  </React.Fragment>
)

export default ReadMore
