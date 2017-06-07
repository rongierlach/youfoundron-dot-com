import Butter from 'buttercms'

export default Butter(
  process.env.BUTTER_API_TOKEN,
  process.env.BUTTER_TEST_MODE
)
