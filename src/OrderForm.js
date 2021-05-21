import React from 'react'

export default function OrderForm(props) {
    const {
        values,
        submit,
        change,
        errors,
        disabled
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form id = 'pizza-form'>
            <div className = 'form-group submit'>
                <h3>Build Your Own Pizza</h3>

                <div className = 'errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <div className = 'form-group inputs' onSubmit={onSubmit}>
                <label><h3>Your Name</h3>
                    <input id = 'name-input'
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>

                <label><h3>Size</h3>
                    <select id = 'size-dropdown'
                        value = {values.size}
                        onChange = {onChange}
                        name = 'size'>
                            <option value = ''>Select</option>
                            <option value = 'small'>Small</option>
                            <option value = 'medium'>Medium</option>
                            <option value = 'large'>Large</option>
                    </select>
                </label>
            </div>

            <div className = 'form-group checkboxes'>
                <label><h3>Select Toppings</h3>
                    <h4>Choose up to 10</h4>
                    
                    <label>Pepperoni
                        <input
                            type = 'checkbox'
                            name = 'pepperoni'
                            checked = {values.pepperoni}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type = 'checkbox'
                            name = 'sausage'
                            checked = {values.sausage}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Canadian Bacon
                        <input
                            type = 'checkbox'
                            name = 'canadian'
                            checked = {values.canadian}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Spicy Italian Sausage
                        <input
                            type = 'checkbox'
                            name = 'spicySausage'
                            checked = {values.spicySausage}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Grilled Chicken
                        <input
                            type = 'checkbox'
                            name = 'chicken'
                            checked = {values.chicken}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Onions
                        <input
                            type = 'checkbox'
                            name = 'onions'
                            checked = {values.onions}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Green Pepper
                        <input
                            type = 'checkbox'
                            name = 'peppers'
                            checked = {values.peppers}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Diced Tomatoes
                        <input
                            type = 'checkbox'
                            name = 'tomatoes'
                            checked = {values.tomatoes}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Black Olives
                        <input
                            type = 'checkbox'
                            name = 'olives'
                            checked = {values.olives}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Roasted Garlic
                        <input
                            type = 'checkbox'
                            name = 'garlic'
                            checked = {values.garlic}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Artichoke Hearts
                        <input
                            type = 'checkbox'
                            name = 'artichoke'
                            checked = {values.artichoke}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Three Cheese
                        <input
                            type = 'checkbox'
                            name = 'threeCheese'
                            checked = {values.threeCheese}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Pineapple
                        <input
                            type = 'checkbox'
                            name = 'pineapple'
                            checked = {values.pineapple}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Extra Cheese
                        <input
                            type = 'checkbox'
                            name = 'extraCheese'
                            checked = {values.extraCheese}
                            onChange = {onChange}
                        />
                    </label>
                </label>
            </div>

            <label><h5>Special Instructions</h5>
                <input id = 'special-text'
                    type = 'text' 
                    name = 'specialInstructions'
                    onChange = {onChange}
                    value = {values.specialInstructions}
                />
            </label>
        
            <button disabled = {disabled}>Add to Order</button>
        
        </form>
    )
}