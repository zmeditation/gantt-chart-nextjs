export default function GanttChart() {
  return (
    <div id="gantt-container">
      <style jsx>{`
        #gantt-container {
          --color-text: #272a2e;
          --color-primary-dark: #0195e4;
          --color-primary-light: #9ddcff;
          --color-secondary: #4be35a;
          --color-tertiary: #f7f7f7;
          --color-orange: #ef5350;
          --color-outline: #e9eaeb;
          --border-radius: 5px;
          --cell-height: 40px;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
