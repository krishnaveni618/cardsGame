export default function ResultModel({ result, targetTime }) {
  return (
    <dialog open>
      <h2>you {result}</h2>
      <p>
        the target time was <strong>{targetTime}</strong>seconds
      </p>
      <p>
        you stopped the time was<strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
