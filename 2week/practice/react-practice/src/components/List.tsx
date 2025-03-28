type Props = {
    tech: string;
  };
  
  const List = ({ tech }: Props) => {
    return (
      <li style={{ listStyle: 'none' }}>
        {tech}
      </li>
    );
  };
  
  export default List;
  