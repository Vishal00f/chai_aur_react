import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk){
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError]=useState(null);
    const dispatch= useDispatch();
    const runThunk = useCallback((arg)=>{
        setIsLoading(true);
        dispatch(thunk(arg)).unwrap().catch((err)=>setError(err)).finally(setTimeout(() => {
            setIsLoading(false)
        }, 1000))
    })
    return [runThunk,isLoading,error];
}

export default useThunk