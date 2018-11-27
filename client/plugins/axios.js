export default function ({$axios, error, redirect}) {
  $axios.onResponse(res=>{
    return res;
  })
  $axios.onError(err => {
    return error({

    })
  })
}

