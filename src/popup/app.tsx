import './../app.css'
export function App() {
  return (
    <>
      <h1>Show data attributes</h1>
      <div class="card">
        <button onClick={() => chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) { 
            chrome.scripting.executeScript({target: {tabId: tabs[0].id ? tabs[0].id : 0}, files: ['./../content-scripts/test.js'] })
         })}>Do something</button>
      </div>
    </>
  )
}
