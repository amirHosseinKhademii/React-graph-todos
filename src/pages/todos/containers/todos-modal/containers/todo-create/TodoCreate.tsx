import { todosModalAtom } from "pages/todos/recoil";
import { useResetRecoilState } from "recoil";
import { Button } from "components/button";
import {
  TodosDocument,
  useCreate_TodoMutation,
} from "__generated__/resolvers-types";
import { Form, FormInput, FormTextarea } from "components/form";
import { joiner } from "utils";

export const TodoCreate = () => {
  const resetModal = useResetRecoilState(todosModalAtom);
  const [mutate, { loading }] = useCreate_TodoMutation({
    onCompleted: () => resetModal(),
    refetchQueries: [{ query: TodosDocument }],
  });

  return (
    <Form
      defaultValues={{ title: "", body: "" }}
      onSubmit={({ title, body }) => mutate({ variables: { title, body } })}
      className="px-4 pt-4 pb-10 flex flex-col space-y-10"
    >
      <span className="text-center">Add a new todo</span>
      <FormInput placeholder="Title" name="title" />
      <FormTextarea placeholder="Description" name="body" />
      <Button disabled={loading} className={joiner(loading && "animate-pulse")}>
        Create
      </Button>
    </Form>
  );
};
