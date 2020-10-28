```$xslt
function App() {
  return (
      <ThemeProvider>
          <ModalProvider>
              <BrowserRouter>
                  <Grid container spacing={0}>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                           <ChqMenu items={[{title:'page1',url:'/page1'},{title:'page2',url:'/page2'}]}/>
                      </Grid>
                      <Grid item item lg={12} md={12} sm={12} xs={12} style={{padding:'5px'}}>
                          <Switch>
                              <Route path="/page1" component={Page1} />
                              <Route path="/page2" component={Page2} />
                              <Route path="/page3" component={Page3} />
                          </Switch>
                      </Grid>
                  </Grid>
              </BrowserRouter>
          </ModalProvider>
      </ThemeProvider>
  );
}

export default App;
```
