import Form from 'next/form'

export default function FormLogin() {
  return (
    <Form action="/search">
      <div>
        <label htmlFor=""></label>
        <input type="email" name="inEmail" id="inEmail" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="password" name="inPassword" id="inPassword" />
      </div>
    </Form>
  )
}
