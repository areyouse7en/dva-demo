import dva from 'dva'
import './index.css'

// 1. Initialize
const app = dva()

// 2. Plugins
import createLoading from 'dva-loading'
app.use(createLoading())

// 3. Model
app.model(require('./models/users'))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
