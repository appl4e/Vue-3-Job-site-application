import { ref } from "vue";
import api from "@/helpers/api";

const useForm = () => {
	const loading = ref(false);
	const errors = ref([]);

	const submit =  (method = "get", fields, endpoint) => {		
		return new Promise(async (resolve)=>{
			errors.value = [];
			loading.value = true;
			const { ok, data, originalError } = await api[method](endpoint, fields);

			if (!ok) {
				errors.value = originalError.response.data.errors;
				console.log(errors.value);
			} else {
				console.log("success");
				resolve('success');
			}

			loading.value = false;
		});
		

		
		// try {
		//   const response = await axios.post("https://jobs-api.return0.codes/api/auth/register", regFields)
		// }
		// catch (err) {

		//   console.log(err.response.data)

		// }  loading.value = false
	};

	const getErrors = (key) => {
		return errors.value[key]?.join(" ") || "";
	};

	return { submit, getErrors, loading };
};

export default useForm;
