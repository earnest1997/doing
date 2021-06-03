import React from 'react'

enum ERuleKey{
    required='required', 
    maxLength='maxLength',
    minLength='minLength',
    reg='reg'
}

type IMap={
    [index in ERuleKey]:any
}
const rulesMap:Partial<IMap>={
[ERuleKey.required]:(value)=>{

}
}

export function validateDecorator(target,name,descriptor){
    const originFunc=descriptor.value
    descriptor.value=function(rules){
      rules.map((key,rule)=>{

      })
    }
}

export class Validator extends React.Component{
    protected hasError=false
    protected formData={}
    formRef=React.createRef()
    async validate(rulesArr){
        const validates=rulesArr.map(({key,rules})=>{
         const value=this.formData[key]
        //  return new Promise<void>((resolve,reject)=>{
        //   const res=rules.every(rule=>rulesMap[rule] && rulesMap[rule](value))
        //   if(res){
        //       resolve()
        //   }else{
        //       reject()
        //   }
        //  })
        const itemValidator=rules.map(item=>{
          const key=Object.keys(item)[0]
          const val=Object.values(item)[0]
          if(!rulesMap[key]){
              throw new Error('非法的规则')
          }
          return rulesMap[key].call(value,key,val)
        })
        return Promise.all(res).catch((err)=>{this.hasError=true;console.log(err);return Promise.reject(err)})
        })
        for await(let res of rules){
          
        }
    }
}

Obsever.observe(formData,{'name':[{required:true,message:''},{maxLength:8,message:''},{custom:()=>{}}]})

Proxy(FormData,{
    
})