import Table from 'tty-table';

export default (data, showKey) => {
  const options = {
    borderStyle: "solid",
    borderColor: "blue",
    headerAlign: "center",
    align: "left",
    color: "cyan",
    width: "100%"
  };
  const header_option = {
    headerColor: "cyan",
    color: "cyan",
    align: "left",
    width: "auto",
    formatter: value => value,
  }
  const header = showKey.map(value => typeof value === 'string' ? ({
    ...header_option,
    value,
  }) : ({  ...header_option, ...value, }));

  console.log(Table(header, data, options).render());
}