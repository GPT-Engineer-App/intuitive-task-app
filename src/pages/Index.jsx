import { useState } from "react";
import { Box, Button, Input, List, ListItem, IconButton, Text, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTask = () => {
    if (input.trim() === "") {
      toast({
        title: "No task entered.",
        description: "Please enter a task before adding.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box p={5}>
      <Box display="flex" mb={4}>
        <Input placeholder="Add a new task..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} mr={2} />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" p={2} boxShadow="md">
            <Text>{task}</Text>
            <IconButton icon={<FaTrash />} aria-label="Delete task" colorScheme="red" onClick={() => handleDeleteTask(index)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
