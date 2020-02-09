import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

 import useFetchData from "./useFetchData";

test("useFetch performs GET request", async () => {
  const mock = new MockAdapter(axios);
  const url = "https://opentdb.com/api.php?amount=10";
  
  mock.onGet(url).reply(200);

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetchData(url)
  );

  expect(result.current.data).toEqual([]);
  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.data.length).toEqual(10);
  expect(result.current.loading).toBeFalsy();
});


// test('returns proper initial states', () => {
//   const url = 'https://opentdb.com/api.php?amount=10';
//   const { result } = renderHook(() =>
//   useFetchData({ url })
//   );

//   expect(result.current.loading).toBeFalsy();
//   expect(result.current.data.length).toEqual(10);
// });