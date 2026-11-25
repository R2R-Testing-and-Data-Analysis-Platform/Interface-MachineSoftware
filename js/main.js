
document.addEventListener('DOMContentLoaded',()=>{
 const $=s=>document.querySelector(s);
 const log=$('#serialLog');
 $('#connectBtn')?.addEventListener('click',()=>{
   $('#connectionStatus').className='status good';$('#connectionStatus').innerHTML='<i></i> Connected (demo)';
   $('#portValue').textContent=$('select')?.value||'COM3';$('#lastResponse').textContent='Controller ready';
   if(log)log.textContent+='\\n[demo] Connected to controller\\n[demo] Ready response received';
 });
 $('#disconnectBtn')?.addEventListener('click',()=>{
   $('#connectionStatus').className='status warning';$('#connectionStatus').innerHTML='<i></i> Disconnected';
   $('#portValue').textContent='Not connected';if(log)log.textContent+='\\n[demo] Disconnected';
 });
 $('#clearLog')?.addEventListener('click',()=>{if(log)log.textContent='[system] Log cleared';});
 const start=$('#startV'),end=$('#endV'),steps=$('#steps'),inc=$('#increment');
 function updateIncrement(){if(start&&end&&steps&&inc){let n=Number(steps.value),v=n>1?(Number(end.value)-Number(start.value))/(n-1):NaN;inc.textContent=Number.isFinite(v)?v.toFixed(3)+' V':'Enter at least 2 points';}}
 [start,end,steps].forEach(x=>x?.addEventListener('input',updateIncrement));updateIncrement();
 document.querySelectorAll('[data-demo-save]').forEach(b=>b.addEventListener('click',()=>alert('Demo: configuration/report saved locally in this prototype only.')));
 document.querySelectorAll('[data-demo-export]').forEach(b=>b.addEventListener('click',()=>alert('Demo: connect this action to the real CSV export service during implementation.')));
 document.querySelectorAll('[data-demo-start]').forEach(b=>b.addEventListener('click',()=>{alert('Demo only: experiment start requested. No hardware command was sent.');location.href='live-monitoring.html';}));
 const run=$('#runDemo'),pause=$('#pauseDemo'),stop=$('#stopDemo');
 let timer=null,step=0;
 function render(){let pct=Math.round(step/11*100);$('#progressBar').style.width=pct+'%';$('#progressText').textContent=pct+'%';$('#stepVal').textContent=step+' / 11';$('#targetVal').textContent=(step*.5).toFixed(2)+' V';$('#measuredVal').textContent=(step*.5+.002).toFixed(3)+' V';$('#currentVal').textContent=(32.4-step*2.1).toFixed(1)+' mA';}
 function tick(){if(step>=11){clearInterval(timer);timer=null;$('#runStatus').textContent='Completed';$('#eventLog').textContent+='\\n[demo] Sweep completed';return;}step++;render();$('#eventLog').textContent='[demo] Step '+step+': target voltage applied, voltage verified, current recorded';}
 run?.addEventListener('click',()=>{if(timer)return;$('#runStatus').textContent='Running (demo)';timer=setInterval(tick,700);});
 pause?.addEventListener('click',()=>{clearInterval(timer);timer=null;$('#runStatus').textContent='Paused';});
 stop?.addEventListener('click',()=>{clearInterval(timer);timer=null;step=0;render();$('#runStatus').textContent='Stopped';$('#eventLog').textContent='[demo] Experiment stopped by operator';});
 $('#historySearch')?.addEventListener('input',filterHistory);$('#typeFilter')?.addEventListener('change',filterHistory);
 function filterHistory(){let q=$('#historySearch').value.toLowerCase(),t=$('#typeFilter').value;document.querySelectorAll('#historyTable tbody tr').forEach(r=>{let txt=r.textContent.toLowerCase();r.hidden=!(txt.includes(q)&&(!t||r.cells[2].textContent===t));});}
 $('#refreshDiagnostics')?.addEventListener('click',e=>{e.currentTarget.textContent='Checks refreshed';setTimeout(()=>e.currentTarget.textContent='Refresh checks',1200);});
});
