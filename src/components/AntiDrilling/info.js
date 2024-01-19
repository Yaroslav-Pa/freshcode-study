// віріант позбавлення prop drilling
// патерн перекидання пропсів

// ми просто замість того щоб визначати та передавати
//  перетрухаємо усі данні з пропсів

/*
standart prop drilling:
  <TreeLV1 has={data, handleClick}/>
    <TreeLV2 need={} props={data, handleClick}/>
      <TreeLV3 need={handleClick} props={data}/>
        <TreeLV3 need={data} props={}/>
*/
/*
with ...prop:
  <TreeLV1 has={data, handleClick, style, children}/>
    <TreeLV2 need={} props={...props}/>
      <TreeLV3 need={handleClick} props={handleClick, ...rest}/>
        <TreeLV3 need={data, style, children} props={data, style, ...rest}/>
*/

/*
props = {children = 'asdasdasdas'};
<div {props}></div> => <div>asdasdasdas</div>
*/