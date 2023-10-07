import { useState } from 'preact/hooks'
import './../app.css'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Show data attributes</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) { 
            chrome.scripting.executeScript({target: {tabId: tabs[0].id ? tabs[0].id : 0}, files: ['./../content-scripts/test.js'] })
         })}>Do something</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </>
  )
}
