const Node = require('./node');

class LinkedList {
    constructor() 
	{
		this.length = 0;
		this._head = null;
		this._tail = null;
		this.currentNode = null;
	}

    append(data) 
	{
		var node = new Node(data);
 
		if (this.length)
		{
			this._tail.next = node;
			node.previous = this._tail;
			this._tail = node;
		}
		else
		{
			this._head = node;
			this._tail = node;
		}
	 
		this.length++;
		 
		return this;
	}

    head() 
	{
		return this._head.data;
	}

    tail() 
	{
		return this._tail.data;
	}

    at(index)
	{
		var currentNode = this.current(index);
		
		return currentNode.data;
	}
	
	current(index)
	{
		var currentNode = this._head,
        length = this.length,
        count = 0;

		if (length === 0 || index < 0 || index > length) 
		{
			throw new Error('Non-existent node in this list.');
		}
		
		if (index == 0) 
		{
			return currentNode;
		}
		else
		{
			while (count < index) 
			{
				currentNode = currentNode.next;
				count++;
			}
			
			return currentNode;
		}
	
	}

    insertAt(index, data) 
	{
		var currentNode = this.current(index);
		
		this.append(currentNode.data);
				
		currentNode.data = data;
		
		return this;
	}

    isEmpty() 
	{
		if(this.length == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

    clear() 
	{
		if (this.length == 1)
		{
			this._head.data = null;
		}
		else
		{
			for(var i = 0; i <= this.length; i++)
			{
				var currentNode = this.current(i);
				currentNode.data = null;
				this.length--;
			}
		}
		return this;
	}

    deleteAt(index) 
	{
		var currentNode = this._head,
        length = this.length,
        count = 0,
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null,
		afterNodeToDelete = null;
 
		if (length === 0 || index < 0 || index > length) 
		{
			throw new Error('Non-existent node in this list.');
		}
	 
		if (index === 0) 
		{
			deletedNode = this._head;
 
			if (currentNode.next == null) 
			{
				this._head.data = null;
			} 
			else 
			{
				this._head = currentNode.next;
				this._head.previous = null;
				this.length--;
			}
		}
		
		else if (index === this.length) 
		{
			this._tail = this._tail.previous;
			this._tail.next = null;
			this.length--;
		} 
		
		else 
		{
			while (count < index)
			{
				currentNode = currentNode.next;
				count++;
			}
	 
			beforeNodeToDelete = currentNode.previous;
			nodeToDelete = currentNode;
			afterNodeToDelete = currentNode.next;
	 
			beforeNodeToDelete.next = afterNodeToDelete;
			afterNodeToDelete.previous = beforeNodeToDelete;
			deletedNode = nodeToDelete;
			nodeToDelete = null;
			this.length--;
		}
	 
		
		
		return this;

	}

    reverse() 
	{
		var arr = new Array(this.length);
		
		for(var i = 0; i < this.length; i++)
		{
			arr[i] = this.at(i);			
		}
		
		arr.reverse();
		
		for(var index in arr)
		{
			this.current(index).data = arr[index];	
		}
		
		return this;
	}

    indexOf(data)
	{
		for(var i = 0; i < this.length; i++)
		{
			if(this.at(i) == data)
			{
				return i;
			}
		}
		
		return -1;
	}
}

module.exports = LinkedList;
