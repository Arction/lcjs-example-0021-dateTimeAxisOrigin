(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const i=a(377),s=a(613),{lightningChart:n,AxisTickStrategies:r,Themes:o}=i,{createProgressiveTraceGenerator:l}=s,u=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Dashboard({theme:o[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,numberOfRows:2,numberOfColumns:1}),c=u.createChartXY({columnIndex:0,rowIndex:0,columnSpan:1,rowSpan:1}),d=u.createChartXY({columnIndex:0,rowIndex:1,columnSpan:1,rowSpan:1});c.getDefaultAxisX().setTickStrategy(r.DateTime);const g=new Date(2e3,1,1);g.getTime(),d.getDefaultAxisX().setTickStrategy(r.DateTime,(e=>e.setDateOrigin(g))),c.setTitle("Default origin").getDefaultAxisY().setTitle("Value"),d.setTitle("Modified origin").getDefaultAxisY().setTitle("Value");const m=c.addLineSeries(),h=d.addLineSeries();l().setNumberOfPoints(1e3).generate().toPromise().then((e=>{m.add(e),h.add(e),c.getDefaultAxisX().fit(),d.getDefaultAxisX().fit()}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);